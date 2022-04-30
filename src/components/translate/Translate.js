import React, { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import Convert from './Convert';

const Translate = ({ options }) => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input
            value={text}
            onChange={event => setText(event.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label='Select A Language'
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert
        language={language}
        text={text}
      />
    </div>
  );
};

export default Translate;
