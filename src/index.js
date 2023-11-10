import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import sun from '@/test'

console.log(sun(2,2))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


