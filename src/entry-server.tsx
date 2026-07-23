import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { Page } from './types';

export function render(path: Page) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App initialPage={path} />
    </React.StrictMode>
  );
  return { html };
}
