import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { FilterPaneStyle } from './styles/FilterPane';
import DatePickerUI from './DatePicker';
import RangeSlider from './RangeSlider';

type Props = any;
const FilterPane: React.FC<Props> = ({
  sortPosts,
  setSort,
  setDate,
  dateInput,
  setFilterType,
  highestVote
}) => {
  return (
    <FilterPaneStyle>
      <RangeSlider highestVote={highestVote} />
      <DatePickerUI
        setDate={setDate}
        dateInput={dateInput}
        setFilterType={setFilterType}
      />
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
    </FilterPaneStyle>
  );
};

export default FilterPane;
