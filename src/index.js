import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Todo from './components/todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todo/>);

reportWebVitals();
