import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));



function Page() {return React.createElement('div', null, [
  React.createElement('h1', null, `Hi ${Date.toLocaleString()}`),
  React.createElement('p', null, 'Hello'),
  React.createElement('p', null, 'Hey')
]);
}
  



const rootEL = document.querySelector('#root');


