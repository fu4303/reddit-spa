import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';

type Props = any;
const RangeSlider: React.FC<Props> = ({ highestVote }) => {
  const [range, setRange] = useState(0);
  return (
    <Form inline className="ranger">
      <Form.Group>
        <Form.Label htmlFor="rangeInput">Range</Form.Label>

        <Form.Control
          id="rangeInput"
          type="range"
          custom
          min={0}
          max={highestVote}
          step="1000"
          value={range}
          onChange={(e) => {
            setRange(Number(e.target.value));
            console.log(e.target.value);
          }}
        />

        <Form.Text>{range}</Form.Text>
      </Form.Group>
    </Form>
  );
};

export default RangeSlider;
