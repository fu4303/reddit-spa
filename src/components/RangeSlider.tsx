import React from 'react';
import { Form } from 'react-bootstrap';

type Props = any;
const RangeSlider: React.FC<Props> = ({
  highestVote,
  range,
  setRange,
  setFilterType,
}) => {
  return (
    <Form inline className="ranger">
      <Form.Group>
        <Form.Label htmlFor="rangeInput">Filter by upvotes</Form.Label>

        <Form.Control
          id="rangeInput"
          type="range"
          custom
          min={0}
          max={highestVote}
          step="10"
          value={range}
          onChange={(e) => {
            setFilterType('range');
            setRange(Number(e.target.value));
          }}
        />

        <Form.Text>{range}</Form.Text>
      </Form.Group>
    </Form>
  );
};

export default RangeSlider;
