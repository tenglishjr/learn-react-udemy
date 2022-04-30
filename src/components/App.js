import React, { useState } from 'react';
import Route from '../components/router/Route';
import items from '../constants/items';
import languages from '../constants/languages';
import options from '../constants/options';
import Accordion from './accordion/Accordion';
import Dropdown from './dropdown/Dropdown';
import Header from './navigation/Header';
import Search from './search/Search';
import Translate from './translate/Translate';

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select A Color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate options={languages} />
      </Route>
    </div>
  );
};
