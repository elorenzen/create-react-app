// Import React and the ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// Create a React component
const App = () => {
    return <div>Hi there</div>
};
// Take React component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)