// Import React and the ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return "CLICK ME";
}

// Create a React component
const App = () => {
    return(
        <div>
	        <label className="label" for="name">Enter name:</label>
	        <input type="text" id="name" />
	        <button style={{marginLeft: '4px', backgroundColor: 'blue', color: 'white'}}>
                {getButtonText()}
            </button>
        </div>
    )
};
// Take React component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)