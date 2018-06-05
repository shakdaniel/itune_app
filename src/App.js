import React, { Component } from 'react';
import Search from "./components/Search";
import Albums from "./components/Albums";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      artist: []
    }
  }
  getAlbums = async (e) => {
    e.preventDefault();
    const artist = e.target.elements.artist.value;
    const api_call = await fetch(`https://itunes.apple.com/search?term=${artist}&entity=album`);
    const data = await api_call.json();
    console.log(data.results);
    if (artist) {
      this.setState({
        artist: data.results,
        error: ""
      });
    } else {
      this.setState({
        artist: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        <Search getAlbums={this.getAlbums} />
        <Albums artist={this.state.artist} />
      </div>
    );
  }
}

export default App;
