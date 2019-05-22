// Import React and the ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// Create a React component
const App = () => {
    return(
        <div>
	        <label class="label" for="name">Enter name:</label>
	        <input type="text" id="name" />
	        <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
        </div>
    )
};
// Take React component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)