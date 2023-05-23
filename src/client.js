import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routeslist from './pages/routes';
import { Provider } from 'react-redux';
import createStoreInstance from './store';

const store = createStoreInstance(window?._PRELOADED_STATE_);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routeslist />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);