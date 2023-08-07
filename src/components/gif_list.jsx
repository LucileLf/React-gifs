import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  handleClick = (event) => {
    //console.log(event.target.src);
    this.props.selectGif(event.target.src);
  }
  render() {
    return (
      <div className="gif-list" onClick={this.handleClick}>
        {this.props.gifs.map(gif => {
          return <Gif id={gif.id} key={gif.id} />
        })}
      </div>
    )
  }
}

export default GifList;
