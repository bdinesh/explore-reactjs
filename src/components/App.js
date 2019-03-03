import React, { Component } from 'react';
import Inventory from './Inventory';
import Header from './Header';
import Order from './Order';

class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Inventory />
        <Order />
      </div>
    );
  }
}

export default App;
