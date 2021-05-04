import React, { useState, useContext } from 'react';
import { Form, FormGroup, Spinner } from 'reactstrap';
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
    <main className="container d-flex vh-100" role="main">
      {context.isError ? (
        <div className="m-auto">
          <h2>Something went wrong, try again later</h2>
          <button onClick={() => context.resetErrorAlert()}>close</button>
        </div>
      ) : (
        <div className="m-auto">
          {context.isLoading ? (
            <Spinner color="info" />
          ) : (
            <Form inline onSubmit={(e) => context.getMovieData(e, input)}>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <LabelModel
                  id="url"
                  labelName="URL/ID"
                  labelValue={"URL or video's id"}
                />
                <InputModel
                  name="movieURL"
                  id="url"
                  type="text"
                  placeholder="Type video url or id..."
                  value={input}
                  onchangeHandler={handleInput}
                />
                <ButtonModel type="submit" value="Get movie!" id="getMovie" />
              </FormGroup>
            </Form>
          )}
        </div>
      )}
    </main>
  );
}

export default AddForm;
