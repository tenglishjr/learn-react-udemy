import React, { useState } from 'react';
import Dropdown from './dropdown/Dropdown';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end Javascript framework',
  },
  {
    title: 'Why is React?',
    content: 'Because it is.',
  },
  {
    title: 'How is React?',
    content: 'Nice.',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/*<Accordion items={items} />*/}
      {/*<Search />*/}
      <button onClick={event => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          onSelectedChange={setSelected}
          options={options}
          selected={selected}
        />
      ) : null}
    </div>
  );
};
