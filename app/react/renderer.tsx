import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App/App';
import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
    <RecoilRoot>
        <HashRouter>
            <App />
        </HashRouter>
    </RecoilRoot>
    , document.getElementById('root'));
