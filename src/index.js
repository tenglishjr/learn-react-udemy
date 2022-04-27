import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {
    const buttonText = { text: 'Click Me!' };
    const labelText = 'Enter name:';

    return (
        <div>
            <label className='label' htmlFor="name">
                {labelText}
            </label>
            <input type="text" id='name'/>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
            </button>
        </div>
    );
};

// Render the React component in the DOM
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);