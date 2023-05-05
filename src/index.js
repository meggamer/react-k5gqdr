import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';




function Page() {return React.createElement('div', null, [
  React.createElement('h1', null, `Hi ${Date.toLocaleString()}`),
  React.createElement('p', null, 'Hello'),
  React.createElement('p', null, 'Hey')
]);
}
  

const rootEL = document.querySelector('#root');
const root = ReactDOM.createRoot(document.getElementById('root'));



setInterval(function(){
  root.render(Page());
}, 1000);