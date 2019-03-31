import React, { Component } from 'react';
import './App.css';
import ExchangeTable from './Table/ExchangeTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Exchange Rates</h1>
        <ExchangeTable />
      </div>
    );
  }
}

export default App;
