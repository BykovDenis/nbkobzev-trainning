import './App.css';

import React, { Component } from 'react';

import Navbar from './components/navbar/index';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
