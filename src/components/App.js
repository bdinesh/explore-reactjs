import React, { Component } from 'react';
import Inventory from './Inventory';
import Header from './Header';
import Order from './Order';

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  //prop function to get the data from the child components
  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline={'Fresh sea food'} />
        </div>
        <Order />
        {/*Props function added to the child component*/}
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
