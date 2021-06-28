import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import rootStore from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={rootStore}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
