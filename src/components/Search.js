import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function SearchBar({ clickHandler }) {
  const [id, setID] = useState();

  return (
    <Form inline onSubmit={(e) => clickHandler(e, id)}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleUrl">URL/ID</Label>
        <Input
          type="text"
          name="id"
          id="exampleUrl"
          placeholder="Type video url or id..."
          onChange={(e) => setID(e.target.value)}
        />
        <Button type="submit" target="_blank">
          Submit
        </Button>
      </FormGroup>
    </Form>
  );
}

export default SearchBar;
