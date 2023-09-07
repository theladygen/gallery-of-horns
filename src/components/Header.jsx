import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Gallery of Horns</h1>
          <Dropdown className="dropdown">
            <Dropdown.Toggle id="dropdown-basic">
              Sort Gallery by the Number of Horns!
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">1 horn</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2 horns</Dropdown.Item>
              <Dropdown.Item href="#/action-3">3 horns</Dropdown.Item>
              <Dropdown.Item href="#/action-3">100 horns</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
      </header>
    );
  }
}

export default Header;
