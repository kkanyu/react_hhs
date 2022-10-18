// Kaylene-Nhu Nguyen @ Mohawk College, 2022

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <HashRouter basename='/react_hhs'>
        <App />
    </HashRouter>
</React.StrictMode>
);