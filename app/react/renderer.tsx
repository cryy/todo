import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

// Entry point to the app
ReactDOM.render(
    <RecoilRoot>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </RecoilRoot>
    , document.getElementById('root'));
