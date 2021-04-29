import React, { useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import ButtonModel from '../atoms/Button';
import InputModel from '../atoms/Input';
import LabelModel from '../atoms/Label';

function FirstVisit() {
  const [user, setUser] = useState();

  const submitName = () => {
    window.localStorage.setItem('user', user);
  };
  const handleInputChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <Form inline onSubmit={submitName}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <LabelModel id="user" labelValue="Hi, buddy! Whats' your name?" />
        <InputModel
          name="movieURL"
          id="user"
          type="text"
          placeholder="Enter your name..."
          onchangeHandler={handleInputChange}
        />
        <ButtonModel type="submit" value="Enter" id="submitName" />
      </FormGroup>
    </Form>
  );
}

export default FirstVisit;
