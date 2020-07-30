import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import SearchBar from './SearchBar';

type Props = any;
const Nav: React.FC<Props> = ({ filteredPosts, val, setVal }) => {
  let history = useHistory();

  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="bg-dark justify-content-between"
      style={{ padding: '15px' }}
    >
      <Navbar.Brand
        onClick={() => history.goBack()}
        style={{ cursor: 'pointer' }}
      >
        Reddit Clone
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <SearchBar val={val} setVal={setVal} filteredPosts={filteredPosts} />
    </Navbar>
  );
};

export default Nav;
