import React from 'react';
import { FilterPaneStyle } from './styles/FilterPane';
import DatePickerUI from './DatePicker';
import RangeSlider from './RangeSlider';
import Sorter from './Sorter';

type Props = any;
const FilterPane: React.FC<Props> = ({
  sortPosts,
  setSort,
  setDate,
  dateInput,
  setFilterType,
  highestVote,
  range,
  setRange,
}) => {
  return (
    <FilterPaneStyle>
      <RangeSlider
        highestVote={highestVote}
        range={range}
        setRange={setRange}
        setFilterType={setFilterType}
      />
      <DatePickerUI
        setDate={setDate}
        dateInput={dateInput}
        setFilterType={setFilterType}
      />
    </FilterPaneStyle>
  );
};

export default FilterPane;
