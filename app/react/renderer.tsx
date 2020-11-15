import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

// Entry point to the app, basename is set todo as a hotfix for routing on GitHub Pages
ReactDOM.render(
    <RecoilRoot>
        <BrowserRouter basename="/todo">
            <App />
        </BrowserRouter>
    </RecoilRoot>
    , document.getElementById('root'));
