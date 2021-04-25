import React, { useState, useContext } from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import ButtonModel from '../atoms/Button';
import InputModel from '../atoms/Input';
import LabelModel from '../atoms/Label';
import { MoviesContext } from '../../providers/MoviesProvider';

function AddForm() {
  const [movieID, setMovieID] = useState('');
  const [targetApi, setTargetApi] = useState('yahoo');
  const context = useContext(MoviesContext);

  const handleID = (e) => {
    e.preventDefault();
    setMovieID(e.target.value);
  };
  const handleTargetApi = (e) => {
    setTargetApi(e.target.value);
  };

  return (
    <Form inline onSubmit={(e) => context.getMovieData(e, targetApi, movieID)}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <LabelModel id="url" labelName="URL/ID" />
        <InputModel
          name="movieURL"
          id="url"
          type="text"
          placeholder="Type video url or id..."
          value={movieID}
          onchangeHandler={handleID}
        />
        <FormGroup check>
          <Label>
            <InputModel
              name="api"
              id="yahoo"
              type="radio"
              value="yahoo"
              onchangeHandler={handleTargetApi}
            />
            {"Option one is this and that—be sure to include why it's great"}
          </Label>

          <Label>
            <InputModel
              name="api"
              id="iex"
              type="radio"
              value="iex"
              onchangeHandler={handleTargetApi}
            />
            {
              'Option two can be something else and selecting it will deselect option one'
            }
          </Label>
        </FormGroup>
        <ButtonModel type="submit" value="Get movie!" />
      </FormGroup>
    </Form>
  );
}

export default AddForm;
