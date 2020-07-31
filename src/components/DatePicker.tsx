import React from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

type Props = any;
const DatePickerUI: React.FC<Props> = ({
  setDate,
  dateInput,
  setFilterType,
}) => {
  const currDate = new Date();
  const handleChange = (date: any) => {
    setDate(date);
    setFilterType('date');
  };
  return (
    <Form inline className="dater">
      <Form.Label className="my-1 mr-2">Get Posts from: </Form.Label>
      <DatePicker
        selected={dateInput}
        onChange={handleChange}
        showTimeSelect
        showTimeSelectOnly
        maxDate={currDate}
        timeCaption="Time"
        dateFormat="h:mm aa"
        closeOnScroll={true}
      />
    </Form>
  );
};

export default DatePickerUI;
