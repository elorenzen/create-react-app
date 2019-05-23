// Import React and the ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {
    const buttonText = "Click me!";

    return(
        <div>
	        <label className="label" htmlFor="name">Enter name:</label>
	        <input type="text" id="name" />
	        <button style={{marginLeft: '4px', backgroundColor: 'blue', color: 'white'}}>
                {buttonText}
            </button>
        </div>
    )
};
// Take React component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)