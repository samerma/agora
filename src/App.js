import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react'
import Market from './components/market';

@inject("inventory")
@observer
class App extends Component {

  render() {
    return (
      <div className="App">
        <Market />
      </div>
    );
  }
}

export default App;
