import React, { useState, useContext } from 'react';
import { Form, FormGroup } from 'reactstrap';
import ButtonModel from '../atoms/Button';
import InputModel from '../atoms/Input';
import LabelModel from '../atoms/Label';
import { MoviesContext } from '../../providers/MoviesProvider';

function AddForm({ clickHandler }) {
  const [movieID, setMovieID] = useState('');
  const context = useContext(MoviesContext);

  const handleID = (e) => {
    setMovieID(e.target.value);
  };

  return (
    <Form inline onSubmit={(e) => context.addMovie(e)}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <LabelModel id="url">URL/ID</LabelModel>
        <InputModel
          onchangeHandler={handleID}
          value={movieID}
          name="movieURL"
          id="url"
          placeholder="Type video url or id..."
        />
        <ButtonModel type="submit" value="Get movie!" />
      </FormGroup>
    </Form>
  );
}

export default AddForm;
