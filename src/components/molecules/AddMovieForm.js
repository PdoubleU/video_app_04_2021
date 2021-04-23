import React, { useState, useContext } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import ButtonModel from '../atoms/Button';
import InputModel from '../atoms/Input';
import LabelModel from '../atoms/Label';
import { MoviesContext } from '../../providers/MoviesProvider';

function AddForm({ clickHandler }) {
  const [movieID, setMovieID] = useState('');
  const [targetApi, setTargetApi] = useState('yahoo');
  const context = useContext(MoviesContext);

  const handleID = (e) => {
    e.preventDefault();
    setMovieID(e.target.value);
  };
  const handleTargetApi = (e) => {
    e.preventDefault();
    setTargetApi(e.target.value);
  };

  return (
    <Form inline onSubmit={(e) => context.getMovieData(e, targetApi, movieID)}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <LabelModel id="url">URL/ID</LabelModel>
        <InputModel
          onchangeHandler={handleID}
          value={movieID}
          name="movieURL"
          id="url"
          placeholder="Type video url or id..."
        />
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="api"
              value="yahoo"
              onChange={(e) => handleTargetApi(e)}
            />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="api"
              value="iex"
              onChange={(e) => handleTargetApi(e)}
            />{' '}
            Option two can be something else and selecting it will deselect
            option one
          </Label>
        </FormGroup>
        <ButtonModel type="submit" value="Get movie!" />
      </FormGroup>
    </Form>
  );
}

export default AddForm;
