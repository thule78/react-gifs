import React, { Component} from 'react';
import SearchBar from './search.jsx';
import Gif from './gif.jsx';


class App extends Component {
  render () {
    return (
      <div>
        <div className="left-scene">
        <SearchBar />
        <Gif />
        <div className="selected-gif"></div>
        </div>
        <div className="right-scene">
        </div>
      </div>
      );
  }
}


export default App;
