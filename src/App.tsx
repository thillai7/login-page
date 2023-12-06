import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom';

import RoutesComponent from './components/RoutesComponent';

import './App.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <RoutesComponent />
            </BrowserRouter>
        </div>
    );
}

export default App;
