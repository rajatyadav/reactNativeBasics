import React, { Component } from 'react';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBtk_o3Y0EcQ1b8SmlChPbbMAGMteFauII',
      authDomain: 'manager-64ccc.firebaseapp.com',
      databaseURL: 'https://manager-64ccc.firebaseio.com',
      projectId: 'manager-64ccc',
      storageBucket: '',
      messagingSenderId: '957117520804'
    };
     firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
