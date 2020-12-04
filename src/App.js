import React, { Component } from 'react';

import Navbar from './components/navbar/index';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default App;
