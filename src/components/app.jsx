import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: ""
    }
  }

  search = (query) => {
    giphy('USi3rlO5eVbjOEkRo7UrvQIG5K0271l8').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      console.log(res.data);
      this.setState({
        gifs: res.data
      })
    })
  }

  selectGif = (url) => {
    console.log(url);
    this.setState({
      selectedGifId: (url.replace("https://i.giphy.com/media/",'').replace("/giphy.gif",''))
    })
  }

  render() {

    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <Gif id={this.state.selectedGifId} />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default App;
