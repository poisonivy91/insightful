import React from 'react';
//import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

//const container = document.getElementById('app');

//const root = createRoot(container);

//root.render(<App tab="home" />);
