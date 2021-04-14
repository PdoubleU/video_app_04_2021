import React, { useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import FormButton from './FormElements/Button';
import FormInput from './FormElements/Input';
import FormLabel from './FormElements/Label';

function AddForm({ clickHandler }) {
  const [movieID, setMovieID] = useState('');

  const handleID = (e) => {
    setMovieID(e.target.value);
  };

  return (
    <Form inline onSubmit={(e) => clickHandler(e, movieID)}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <FormLabel id="url">URL/ID</FormLabel>
        <FormInput
          onchangeHandler={handleID}
          value={movieID}
          name="movieURL"
          id="url"
          placeholder="Type video url or id..."
        />
        <FormButton />
      </FormGroup>
    </Form>
  );
}

export default AddForm;
