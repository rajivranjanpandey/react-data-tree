import React, { Component } from 'react';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store, history } from './config/app_config';
import IndexRouter from './config/navigate';
import ErrorBoundary from './components/error-boundary';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ErrorBoundary>
            <IndexRouter />
          </ErrorBoundary>
        </Router>
      </Provider>
    )
  }
}



export default App;
