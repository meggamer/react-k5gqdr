import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './Page'; 

import './style.css';





  

const rootEL = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEL);
/*const root = ReactDOM.createRoot(document.getElementById('root'));*/


  root.render(<Page />);
