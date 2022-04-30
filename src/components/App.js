import React from 'react';
import Translate from './translate/Translate';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
];

export default () => {
  return (
    <div>
      <Translate options={options} />
    </div>
  );
};
