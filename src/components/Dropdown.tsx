import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { DropDownStyle } from './styles/Dropdown';

type Props = any;
const DropdownUI: React.FC<Props> = ({ sortPosts, setSort }) => {
  return (
    <DropDownStyle>
      <DropdownButton
        title={sortPosts ? sortPosts : 'Sort posts by upvotes'}
        variant="outline-primary"
      >
        {['Ascending', 'Descending'].map((item, idx) => (
          <Dropdown.Item as="button" onClick={() => setSort(item)} key={idx}>
            {item}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </DropDownStyle>
  );
};

export default DropdownUI;
