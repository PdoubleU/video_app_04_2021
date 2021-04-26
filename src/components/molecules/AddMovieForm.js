import React, { useState, useContext } from 'react';
import { Form, FormGroup } from 'reactstrap';
import ButtonModel from '../atoms/Button';
import InputModel from '../atoms/Input';
import LabelModel from '../atoms/Label';
import { MoviesContext } from '../../providers/MoviesProvider';

function AddForm() {
  const [input, setInput] = useState('');
  const context = useContext(MoviesContext);

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <Form inline onSubmit={(e) => context.getMovieData(e, input)}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <LabelModel id="url" labelName="URL/ID" />
        <InputModel
          name="movieURL"
          id="url"
          type="text"
          placeholder="Type video url or id..."
          value={input}
          onchangeHandler={handleInput}
        />
        <ButtonModel type="submit" value="Get movie!" />
      </FormGroup>
    </Form>
  );
}

export default AddForm;
