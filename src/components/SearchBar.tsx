import React, { useEffect } from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';

type Props = any;
const SearchBar: React.FC<Props> = ({ val, setVal, setFilterType }) => {
  useEffect(() => {
    setVal(val);
  }, [val]);
  return (
    <Navbar.Collapse
      id="basic-navbar-nav"
      style={{ alignSelf: 'flex-end', flexGrow: 0 }}
    >
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search... "
          className="mr-sm-2"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
            setFilterType('search')
          }}
        />
      </Form>
    </Navbar.Collapse>
  );
};

export default SearchBar;
