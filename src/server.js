import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import createStoreInstance from './store';
import Routeslist, { routesConfig } from './pages/routes';

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('dist/public'));

app.get('*', (req, res) => {
    const store = createStoreInstance();
    const promises = routesConfig.map(item => {
        const { path, component } = item;
        if (path === req.url && component.getInitialData) {
            const res = component.getInitialData(store);
            return res;
        } else {
            return null;
        }
    });

    Promise.all(promises).then(() => {
        const preLoadedState = store.getState();
        console.log(preLoadedState);
        const content = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url}>
                    <Routeslist />
                </StaticRouter>
            </Provider>
        );

        const html = `
            <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window._PRELOADED_STATE_ = ${JSON.stringify(preLoadedState)}
                </script>
                <script src='bundle_client.js'></script>
            </body>
            </html>
        `
        res.writeHead(200, {
            'content-type': 'text/html;charset=utf8'
        });

        res.end(html);
    });
});

app.listen(port, () => {
    console.log(`Server is runing at http://localhost:${port}`);
});