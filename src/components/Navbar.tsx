import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';

type Props = any;
const Nav: React.FC<Props> = () => {
  let history = useHistory();

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand
        onClick={() => history.goBack()}
        style={{ cursor: 'pointer' }}
      >
        Reddit Clone
      </Navbar.Brand>
    </Navbar>
  );
};

export default Nav;
