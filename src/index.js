import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { ApolloProvider } from 'react-apollo';

import App from './App';
import Reducer from './redux/reducers';
import { createClient } from './graphql';

import './styles/styles.scss';
import './styles/Typist.scss';

const store = createStore(Reducer);
const client = createClient();

const render = Component => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <AppContainer>
        <Provider store={store}>
          <Router>
            <Component />
          </Router>
        </Provider>
      </AppContainer>
    </ApolloProvider>,
    document.getElementById('root')
  );
};

render(App);

if ( module.hot ) {
  module.hot.accept('./App.js', () => {
    render(App);
  });
}
