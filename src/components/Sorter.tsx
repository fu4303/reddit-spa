import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

type Props = any;
const Sorter: React.FC<Props> = ({ sortPosts, setSort }) => {
  return (
    <DropdownButton
      title={sortPosts ? sortPosts : 'Sort posts by upvotes'}
      variant="outline-primary"
      className="form-inline"
    >
      {['Ascending', 'Descending'].map((item, idx) => (
        <Dropdown.Item as="button" onClick={() => setSort(item)} key={idx}>
          {item}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default Sorter;
