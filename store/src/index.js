import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Point to your main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // This targets the div with id="root" in index.html
);
