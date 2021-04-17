import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function FirstVisit() {
  const [user, setUser] = useState();

  const submitName = () => {
    window.localStorage.setItem('user', user);
  };

  return (
    <>
      <h2>Hi, buddy! What's your name?</h2>
      <form onSubmit={submitName}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUser(e.target.value)}
        ></input>
        <button type="submit">Enter</button>
      </form>
    </>
  );
}

FirstVisit.propTypes = {};

export default FirstVisit;
