import React from 'react';

import { Form, Text, TextArea, RadioGroup, Radio, Checkbox, Select, Option, Scope, useFormState } from 'informed';

const FormState = ({errors, noTouched}) => {
  const formState = useFormState();
  return (
    <React.Fragment>
      <label>FormState:</label>
      <pre>
        <code className="code" language="language-js">
          {JSON.stringify(formState, null, 2)}
        </code>
      </pre>
    </React.Fragment>
  );
};

const ReactForm = () => (
  <div className="bg-offwhite">
    <section className="section container">
      <h2>Informed</h2>
      <h5>
        Created a form library <a href="https://joepuzzo.github.io/informed">Informed</a>{', '}
        an open source library for creating forms in react. Click the link to
        check out the documentation! Example Below:
      </h5>
      <div className="section container text-left">
        <Form>
          <div className="row">
            <div className="col">
              <label>First name: <Text field="name"/></label>
                <Scope scope="favorite">
                  <label>Favorite color: <Text field="color"/></label>
                  <label>Favorite food: <Text field="food"/></label>
                </Scope>
                <label>Friend 1: <Text field="friends[0]" /></label>
                <label>Friend 2: <Text field="friends[1]" /></label>
                <label>Friend 3: <Text field="friends[2]" /></label>
                <label>Bio:</label>
                <TextArea field="bio"/>
                <RadioGroup field="gender">
                  <label>Male <Radio value="male"/></label>            
                  <label>Female <Radio value="female"/></label>
                </RadioGroup>
                <label>
                  <div>Relationship status:</div>
                  <Select field="status">
                    <Option value="" disabled>
                    Select One...
                    </Option>
                    <Option value="single">Single</Option>
                    <Option value="relationship">Relationship</Option>
                    <Option value="complicated">Complicated</Option>
                  </Select>
                </label>
                <label>
                  Colors:
                </label>
              <Select
                field="colors"
                style={{
                  height: '130px',
                  width: '200px'
                }}
                multiple>
                <Option value="red">Red</Option>
                <Option value="green">Green</Option>
                <Option value="blue">Blue</Option>
                <Option value="yellow">Yellow</Option>
                <Option value="orange">Orange</Option>
                <Option value="purple">Purple</Option>
              </Select>
              <label>Authorize: <Checkbox field="authorize"/></label>
              <button type="submit" className="button button-primary">Submit</button>
            </div>
            <div className="col">
              <FormState />
            </div>
          </div>
        </Form>
      </div>
    </section>
  </div>
);

export default ReactForm;
