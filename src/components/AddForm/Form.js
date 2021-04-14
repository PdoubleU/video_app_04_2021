import React, { useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import FormButton from './FormElements/Button';
import FormInput from './FormElements/Input';
import FormLabel from './FormElements/Label';

function AddForm({ clickHandler }) {
  const [id, setID] = useState();

  return (
    <Form inline onSubmit={(e) => clickHandler(e, id)}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <FormLabel>URL/ID</FormLabel>
        <FormInput onchangeHandler={setID} />
        <FormButton />
      </FormGroup>
    </Form>
  );
}

export default AddForm;
