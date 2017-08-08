import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import firebase from 'firebase';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';
import { Button } from './common';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetails key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
