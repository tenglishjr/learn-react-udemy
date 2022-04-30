import React from 'react';
import Search from '../components/Search';

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

export default () => {
    return (
        <div>
            {/*<Accordion items={items} />*/}
            <Search />
        </div>
    );
};
