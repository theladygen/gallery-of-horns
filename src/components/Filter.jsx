import React from 'react';
import Form from 'react-bootstrap/Form';

class Filter extends React.Component {
  handleSelect(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <>
        <Form.Select
          id="dropdown"
          size="lg"
          onChange={(event) => this.handleSelect(event)}
        >
          <option value="-1">Sort these beasties by number of horns!</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">One Hundred!</option>
        </Form.Select>
      </>
    );
  }
}

export default Filter;
