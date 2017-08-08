import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './components/common';
import AlbumList from './components/AlbumList';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCMnfB68AZBbzducLNoMEFwnvRyQlOwILc',
      authDomain: 'album-3afac.firebaseapp.com',
      databaseURL: 'https://album-3afac.firebaseio.com',
      projectId: 'album-3afac',
      storageBucket: 'album-3afac.appspot.com',
      messagingSenderId: '531464510206'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case false:
        return (
          <View>
            <Header headerText={'Login!'} />
            <LoginForm />
          </View>
        );
      case true:
        return (
          <View>
            <Header headerText={'Album!'} />
            <AlbumList />
          </View>
        );
      default:
        return (
          <View style={styles.spinnerContainer}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  }
};

export default App;
