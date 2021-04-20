import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
        <LabelModel id="user">Hi, buddy! Whats' your name?</LabelModel>
        <InputModel
          name="movieURL"
          id="user"
          placeholder="Enter your name..."
          onchangeHandler={handleInputChange}
        />
        <ButtonModel type="submit" value="Enter" />
      </FormGroup>
    </Form>
  );
}

FirstVisit.propTypes = {};

export default FirstVisit;
