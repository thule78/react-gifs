import React, { Component } from 'react';

class Gif extends Component {
  render (){
    const src = "https://giphy.com/gifs/aladdin-disney-VPPzog2Xe4ELu"
    return(
      <img src={src} alt=" " className="gif"/>
      );
  }
}

export default Gif;
