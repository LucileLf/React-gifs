import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://i.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <div className="selected-gif">
        <img className="gif" src={src} alt=""/>
      </div>
    )
  }
}
export default Gif;
